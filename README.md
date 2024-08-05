# Appointment app

This is an Appointment app's client side.

This app has main purpose to give ability to customers make an appointment with one of business's artists.

There are three different layouts:

- Public, where customers can get info about services, artists etc, choose artist and make an appointment.
- Admin, where business owner or administrator can manage services and staff aka artists, get appointments statistics.
- Staff, where artists can get their working schedule, appointments and customer's info

Before start client you have to expand backend side:

- clone [appointment-be](https://github.com/baxamf/appointment-be)
- inside appointment-be folder execute yarn to install packages
- execute docker-compose up (docker and docker-compose has to be installed in system)
- yarn start

After backend has been started, inside appointment-fe folder run yarn dev

Admin credentials:

- email: admin@mail.com
- password: password

Staff credentials:

- email: staff@mail.com
- password: password
