import User from '../model/userModel.js';

export const create = async (req, res) =>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;
        //destructuring email from newUser. 
        //pulls out specific properties from an object without having to write something like const email = newUser.email;
        //if not there, variable email will be undefined.

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        
        const savedData = await newUser.save();
        res.status(201).json({message: "User created successfully"});
    }catch(error) {
        res.status(500).json({errorMessage:error.message});

    }
}

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const getUserById= async (req, res) =>{
    try{
        const userId= req.params.id;
        const userExists = await User.findById(userId);
        if (!userExists){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(userExists);
    }catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const updatedData = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(201).json({message: "User updated successfully"});

    }catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId= req.params.id;
        const userExists = await User.findById(userId);
        if (!userExists){
            return res.status(404).json({ message: "User not found" });
        }
        await User.findByIdAndDelete(userId);
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}