# Phase 2 - Live Code 1

## Hacktiv Password Manager

**ENV:
**PORT=3000
**SECRET=iniPasswordManagerGuys

**how to use:
**1. cd server > npm i > node app.js / nodemon app.js
**2. live-server the index.html to begin

Pada kali ini kalian akan membuat sebuah website yang dapat menampilkan list password,  menambahkan password dan delete password, semua fitur membutuhkan login

Berikut demo aplikasi password Manager
[demo link](https://youtu.be/v_P9U9xtdic)

### Summary

- Menggunakan sequelize n postgres dan jquery html css
- Memberikan environtment variables jika menggunakan node env
- Dilarang menggunakan alert()
- SPA & **Reactive**

## Release 0 - Authentication

### Server - Register

- buatlah register sesuai api-doc
- password di hash

### Server - Login

- buatlah login sesuai api-doc

### Client - Login & Logout

- jika sudah login, kalau direfresh tidak harus login lagi
- logout berhasil dan menghapus localstorage
- jika berhasil login, tombol logout dan add password muncul, form login ke hide
- Sehabis login, data password user yang sedang login langsung muncul (fetch password ada di release 2)

NOTES: REGISTER CLIENT TIDAK PERLU ADA

## Release 1 - POST password

### Server

- buatlah Post password sesuai api-doc
- gunakan authentication

### Client

- integrasikan form yang ada
- form baru muncul jika tombol add password di navbar di klik
- ketika berhasil menambah , langsung ke halaman password list dan menampilkan semua daftar password termasuk yang baru ditambahkan

## Release 2 - Fetch password List

### Server

- buatlah fetch passwords sesuai api-doc
- gunakan authentication

### Client

- Tampilkan daftar passwords sesuai user yang sedang login
- Ketika user berhasil login daftar password langsung muncul

## Release 3 - Delete Password

### Server

- buatlah delete passwords sesuai api-doc
- gunakan authentication && authorization (user tersebut hanya bisa menghapus jika sudah login dan hanya bisa menghapus miliknya sendiri)

### Client

- Integrasikan tombol delete yang ada pada client dengan fungsi delete
- ketika berhasil delete, password langsung hilang dari halaman password list
