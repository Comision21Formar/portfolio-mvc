const users = [
    {
        id : 1,
        name : "Eric",
        city: "Loma Hermosa"
    },
    {
        id : 2,
        name : "Daniel",
        city: "San Miguel"
    }
]

module.exports = {
    index : (req,res) => {
       
        return res.render('users',{
            users
        })
    
    },
    profile : (req,res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        //console.log(user)

        return res.render('user', {
            user
        })
    }
}