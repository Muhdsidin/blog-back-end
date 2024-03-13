const bcrypt = require("bcrypt")

const crypt = async(password , number )=>{
     const pass =await bcrypt.hash(password,number)
     return pass
}

module.exports = {crypt}