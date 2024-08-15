-- CreateTable
CREATE TABLE `user` (
    `User_id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(255) NOT NULL,
    `Role` ENUM('admin', 'employee', 'department_head', 'maintenance_head', 'technician') NOT NULL,
    `Department` VARCHAR(255) NOT NULL,
    `Created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `Current_State` VARCHAR(255) NOT NULL DEFAULT 'Active',

    UNIQUE INDEX `user_Username_key`(`Username`),
    UNIQUE INDEX `user_Email_key`(`Email`),
    PRIMARY KEY (`User_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
