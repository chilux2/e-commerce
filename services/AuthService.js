

app.post("/register", async (req,res) => {
    const { username, password } = req.body;

    const newUser = await db.customers.createUser({ username, password });

    if(newUser) {
        res.status(201).json({
            msg: " Account creation success",
            newUser
        });
    } else {
        res.status(500).json({msg: "Account creation failure"});
    }
});

