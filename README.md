# DVA313 Project - a cloud-native performance monitoring system
This program is a monitoring system for virtual machines running on Amazon Web Services.
The aim of the project is to offer an easy way of monitoring resource usage for you machines from an easy to use graphical dashboard.

## Repository structure
| Directory        |                                                                        What it contains |
|:-----------------|:----------------------------------------------------------------------------------------|
| /dashboard       |             All [npm](https://www.npmjs.com/) configurations and the graphical web-page |
| /backend         | The PHP files responsible for communicatino between the database, AWS and the dashboard |
| /cloudnative.sql |                                                             The MariaDB database schema |
| /deliverables    |                                                  All deliverables regarding this course |

## Amazon Web Services
For this application to do anything useful you
will need an [AWS](https://aws.amazon.com/) account with an [EC2](https://console.aws.amazon.com/ec2/v2) instance running.
Go to the the [IAM](https://console.aws.amazon.com/iam) panel, and create a an IAM account.
Give the new IAM user programmatic access, and give it the "CloudWatchFullAccess" right.
Remember to keep the secret key, as you will need it later.
Once you have an IAM account, go to the EC2 panel and create a virtual machine of any kind.

**Note**: this application has only been tested with Ubuntu 20.04 EC2 instances.

## Installation

### Ubuntu 20.04
Download the dependencies:
```bash
sudo apt install apache2 php php-mysqli php-xml php-mbstring mariadb-server npm git
```

Clone the repository:
```bash
git clone https://github.com/GunnarGrop1/dva313-project.git
```

The install script will ask you to enter your IAM access key, IAM secret key,
the instance-id of the EC2 instance you want to monitor,
as well as the instances' availability zone (e.g us-east-1), so make sure to have those handy.

**Note**: When entering the availability zone, it will always end with a number (e.g write us-east-2, instead of us-east-2c).

Run the install script (it will ask you for sudo priviliges):
```bash
cd dva313-project/
./install
```

One the install has finished, you can start to application with the 'run' script that was generated by the install:
```bash
./run
```

#### Troubleshooting

##### Can't run the install script
Make sure that the script is executable.
```bash
chmod +x install
```

##### Can't install dependencies
Make sure your system is up to date.
```bash
sudo apt update && sudo apt upgrade -y
```

### Windows 10
Setting everything up on Windows 10 must be done manually, and requires some work.
First of all make sure you have [git](https://git-scm.com/downloads), [npm](https://www.npmjs.com/get-npm), and [XAMPP](https://www.apachefriends.org/download.html) installed.

Clone the repository:
```
git clone https://github.com/GunnarGrop1/dva313-project.git
```

**Note**: When entering the availability zone, it will always end with a number (e.g write us-east-2, instead of us-east-2c).

Create a file called "credentials.php" in "dva313-project/backend/src", make sure it looks like this:
```php
<?php
$credentials_Key = '*your IAM access key*';
$credentials_Secret = '*your IAM secret key*';
$instance_id = '*your EC2 instance id"*';
$location = '*your EC2 availability zone (e.g us-east-1)*';
?>
```

Setting up the web server:
```
1. Start XAMPP.
2. Press 'Explorer' on the right hand side of the XAMPP control panel.
3. Navigate to the "htdocs" folder, and create a new folder called "dva313".
4. In another window, navigate to the "dva313-project" folder that you cloned previously.
5. Copy the folder "dva313/backend" into "htdocs/dva313".
6. In the XAMPP control panel, click the "Start" action under the "Apache" module.
7. Done.
```

Setting up the database:
```
1. In the XAMPP control panel, click the "Start" action under the "MySQL" module.
2. Click the "Admin" action under the "MySQL" module. This will take you to a website.
3. On the website, click on the "SQL" tab at the top
4. In the SQL query box, paste this text "CREATE USER IF NOT EXISTS 'dva313'@'%' IDENTIFIED BY '';
 GRANT ALL PRIVILEGES ON *.* TO 'dva313'@'%';
 FLUSH PRIVILEGES;".
5. Click "Go" in the bottom right. This will create a new MySQL user called "dva313".
6. Click on the "Databases" tab at the top.
7. Create a new database called "cloudnative".
8. Navigate to the "SQL" tab at the top, again.
9. Open up the "cloudnative.sql" in the project root directory in you favorite text editor and copy the content.
10. Paste the content into the SQL query box.
11. Click "Go" in the bottom right, again.
12. Done.
```

Install the npm dependencies:
```
1. Open up cmd.exe or PowerShell and navigat to the "dva313/dashboard" folder.
2. Run "npm install" and wait for it to finish.
3. Run "npm start" to start the application.
4. Everything's done!
```

#### Troubleshooting

##### The graphs on the dashboard doesn't load
Make sure that the "credentials.php" file you created earlier isn't actually called "credentials.php.txt". By default, Windows doesn't let you see file endings, and will append ".txt" to files it considers text files.
Also make sure that the you change the "xampp/htdocs/dva313/backend/src/credentials.php" file, if this is the problem.

## Usage

### Starting the application
When you start the application, it should open a new tab in you default web browser and take you to the right page.
If not: just navigate to "localhost:3000" in your web browser.

On Ubuntu 20.04, you can just use the run script in "dva313-project/dashboard" everytime you want to start the application.

On Windows 10 you need to run "npm start" in the "dva313-project/dashboard" folder to start it, and also make sure that the Apache2 web server and the MariaDB/MySQL database is running (in XAMPP).

### Default login credentials
| Username | Password |
|:---------|:---------|
| admin    |  test123 |
