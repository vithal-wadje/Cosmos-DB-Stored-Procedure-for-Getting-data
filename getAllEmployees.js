function getAllEmployees() {
    var context = getContext();
    var response = context.getResponse();
    var collection = context.getCollection();
    var isAccepted = collection.queryDocuments(
        collection.getSelfLink(),
        'SELECT * FROM Employees',
        function (err, feed, options) {
            if (err) {
                throw new Error("Error while querying for documents: " + err.message);
            }
            response.setBody(feed);
        }
    );

    if (!isAccepted) {
        throw new Error('The query was not accepted by the server.');
    }
}
