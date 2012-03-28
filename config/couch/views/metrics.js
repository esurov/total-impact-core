function(doc) {
    // for items that have aliases, lists items sorted by provider, last request
    //    time, and last update time
    //
    // I (jason) am not sure if we metrics.meta to be keyed by provider or
    // metric name? I think the latter (as it is now), but the former makes
    // things easier for the providers consuming the queue I think.

    if (typeof doc.metrics != "undefined" && typeof doc.metrics.meta != "undefined") {
        for (var metricName in doc.metrics.meta) {
            var metricData = doc.metrics.meta[metricName];
            if ( !metricData.ignore ) {
                emit([metric, metricData.last_requested, metricData.last_modified], doc);
            }
        }
    }
}
