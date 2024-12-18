import { Role } from "../routes/allRoutes.js"

const RoleData = async () => {
    try {
        const adminRole = await Role.findOne({ name: "Admin" });
        const userRole = await Role.findOne({ name: "User" });

        if (!adminRole) {
            await Role.create({ name: "Admin" });
            console.log("Admin role created.");
        }

        if (!userRole) {
            await Role.create({ name: "User" });
            console.log("User role created.");
        }
    } catch (error) {
        console.error("Error inserting default roles:", error);
    }
};

export default RoleData;