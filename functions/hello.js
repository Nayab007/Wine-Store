// domain/.netlify/functions/hello

 exports.handler = async function () {

    return {
                statusCode : 200,
                body: 'Hello World',
    }
}