/* server side
 *1. Mongodb Connection
 ___________________________
 1. create account
 2. create an user with password
 3. whitelist ip address
 4. database>connect> driver>node>view full code
 5. change the password in the uri.
 ---------------------------
 1. create---- post 
 2. app.post('/users', async (req, res)=> {})
 3. make the function async to use await inside it.
 4. make sure you use express.json() middleware
 5. access data from the body: const user = req.body;
 const result = await userCollection.insertOne(user);
 6. res.send(result);

 CLIENT SIDE:
 ------------
 1. CREATE FETCH
 2. add second parameter as an object
 3. provide method: "POST"
 4. ADD headers: {'content-type': 'application/json'}
 5. add body: JSON.stringify(user)




* */