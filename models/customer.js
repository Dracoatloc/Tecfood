const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({ 
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   firstName: {
       type: String,
       required: true
   },
   lastName: {
        type: String,
        required: true
   },
   paymentMethods: {
       type: Array
   },
   canOrder: {
       type: Boolean,
       default: true
   },
   fechaCreado: {
       type:Date,
       default:Date.now
   }
});

//Se encripta la contrasenia
UserSchema.methods.encrypyPassword = async(passsword) => {
    //cifra la contrasenia 
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(passsword,salt);
    return hash;
};


//Verifica con lo que tenemos en la base cuando se logee
UserSchema.methods.matchPassword = async function(passsword){
    return await bcrypt.compare(password, this.passsword);

} 




module.exports = mongoose.model('Customer', customerSchema);  
