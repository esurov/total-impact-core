function(doc) {
    // lists tiids by individual alias namespaces and ids
    if (typeof doc.aliases != "undefined") {
        // expecting every alias object has a tiid
        tiid = doc["_id"];

    	// emit one or more rows for every namespace in aliases
        for (var namespace in doc.aliases) {

            namespaceid_list = doc.aliases[namespace];

            // if just a single value, put it in a list
            if (typeof namespaceid_list == "string") {
    		      namespaceid_list = new Array(namespaceid_list);
    		}

    		// emit a row for every id in the namespace id list
    		for (var i in namespaceid_list) {
                emit([namespace, namespaceid_list[i]], tiid);
            }
        }
    }
}
