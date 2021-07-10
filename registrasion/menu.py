import logging, pickle
from rigester import register_user

logging.basicConfig(level=logging.INFO)


def main():
    print("USER MANAGER PROGRAM")
    print("\t 1. Register")
    print("\t 2. Login")
    print("Enter option: ")
    option = input()
    if option == '1':
        print("USER MANAGER > REGISTER")
        phone = input('>> phone: ')
        password = input('>> password: ')
        name = input('>> name: ')
        email = input('>> email: ')
        try:

            new_user = register_user(name, password, phone, email)

        except Exception as error:
            # print(error.args)
            logging.error(error.args)
        else:
            logging.info("Registered Successfully!")
            # print("Registered Successfully!")
            with open('./users.info', 'wb') as f:
                # pickled = pickle.dumps(new_user)
                # f.write(str(new_user) + "\n")
                f.write(b'\n')
                pickle.dump(new_user, f)
                logging.info("new user add to file")
    elif option == '2':
        print("USER MANAGER > LOGIN")
        phone = input('>> phone: ')
        password = input('>> password: ')
        with open('./users.info', 'rb') as f:
            users_info = pickle.load(f)
            for user in users_info:
                if user.phone == phone and user.password == password:
                    print('login successfully!!!')
                    break
            else:
                logging.error('invalid password or phone!!!')
