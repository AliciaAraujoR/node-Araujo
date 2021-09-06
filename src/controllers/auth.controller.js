import User from '../models/User'

export const   signUp = async (req, res) => {
   const {username, email, password, role} = req.body;

   const newUser = new User({
      username,
      email,
      password: User.encryptPassword(password)
   })
   console.log(newUser)
   
   res.json('signup')
}

export const   signIn = async (req, res) => {
   res.json('signin')
}