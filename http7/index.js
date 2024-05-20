module.exports = async function (context, req) {
	 context.log('The function has been called !');
	 
	 const body = req.body;
	 if (body)
		var bodyContent=JSON.stringify(body);
		const responseMessage = body
		? `Data received: ${bodyContent}`
		: `Please send data in the HTTP body`;
	 context.log(responseMessage); 
	 
	 context.res = {
	 // status: 200, /* Defaults to 200 */
	 body: responseMessage
	 };
}