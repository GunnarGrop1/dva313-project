# dva313-project

## Installation
### Ubuntu 20.04
PLEASE only install this on a new virtual machine, and not on your personal system.

Download the dependencies.
```
sudo apt install apache2 php php-mysqli php-xml php-mbstring mariadb-server npm git
```
Clone the archive.
```
git clone https://github.com/GunnarGrop1/dva313-project.git
```
Run the install script (it will ask you for sudo priviliges).
The install script will ask you to enter you AWS IAM Key, Secret Key, and the instance-id of the EC2 instance you want to monitor,
so make sure to have those handy.
```
cd dva313-project/
./install
```
One the install has finished, you can start to application with the 'run' file that was generated by the install.
```
./run
```
#### Troubleshooting
If you can't run the install script (Ubuntu 20.04 only), make sure it's executable.
```
chmod +x install
```

If you can't install the dependencies, make sure your system are up to date.
```
sudo apt update && sudo apt upgrade -y
```
