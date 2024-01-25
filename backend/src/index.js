const express = require('express');
const conn = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5001;
const multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));


const storage = multer.diskStorage({
    destination: ('./upload/image'),
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// wedding api
app.use('/image', express.static('upload/image'));
app.post('/wedding', upload.single('image'), (req, res) => {
    const data = {
        image: `http://localhost:5001/image/${req.file.filename}`,
        date: req.body.date,
        price: req.body.price,
        timestart: req.body.timestart,
        timeend: req.body.timeend,
        details: req.body.details,
        category: req.body.category,
        name: req.body.name,
    };

    conn.query('INSERT INTO wedding SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: 0,
                message: 'Error inserting data into the database'
            });
        } else {
            res.json({
                success: 1,
                message: 'Details sent successfully',
                result: result
            });
        }
    });
});

// wedding data get 
app.get('/wedding', (req, res) => {

    conn.query('SELECT * FROM wedding', (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                result,
                success: 1
            })
        }
    })
})


app.post('/signup', (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        phone: req.body.phone,
        password: req.body.password,
        image: req.body.image
    };

    conn.query('INSERT INTO signup SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                success: 1,
                message: 'User registered successfully',
                res: result
            });
        }
    });
});

app.get('/signup', (req, res) => {

    conn.query('SELECT * FROM signup', (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                result,
                success: 1,
            })
        }
    })
})

app.get('/signup/:id', (req, res) => {

    id = req.params.id

    conn.query('SELECT * FROM signup WHERE id = ?', id, (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                result,
                success: 1,
            })
        }
    })
})


app.post('/signin', (req, res) => {
    email = req.body.email

    conn.query('SELECT * FROM signup WHERE email = ?', email, (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        if (result && result.length > 0) {
            if (result[0].password == req.body.password) {
                res.json({
                    success: 1,
                    message: "logged in",
                    result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Password is worng",
                })
            }
        }
        else {
            res.json({
                success: 0,
                message: "Email Is not Found"
            })
        }
    })
})

app.get('/userbyid/:id', (req, res) => {
    id = req.params.id

    conn.query('SELECT * FROM signup WHERE id = ?', id, (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            if (result.length <= 1) {
                res.json({
                    success: 1,
                    result
                })
            } else {
                res.json({
                    success: 0
                })
            }

        }
    })
})


app.post('/contact', (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    };

    conn.query('INSERT INTO contact SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                success: 1,
                message: 'Message Send successfully',
                res: result
            });
        }
    });
});


app.patch('/update/:id', (req, res) => {
    id = req.params.id;
    const data = [
        req.body.name,
        req.body.email,
        req.body.country,
        req.body.phone,
        id
    ];

    conn.query('UPDATE signup set name = ? , email = ? , country = ? , phone = ? WHERE id =?', data, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                success: 1,
                message: 'UserData Was Updated',
                res: result
            });
        }
    });
});


app.patch('/changepassword/:id', (req, res) => {
    id = req.params.id;
    const data = [
        req.body.newpassword,
        id
    ];

    conn.query('SELECT * FROM signup WHERE id = ?', id, (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            if (result[0].password == req.body.password) {
                conn.query('UPDATE signup set password = ?  WHERE id =?', data, async (err, result) => {

                    if (err) {
                        console.error(err);
                    } else {
                        res.json({
                            success: 1,
                            message: 'Password Are Changed',
                            res: result
                        });
                    }
                });
            } else {
                res.json({
                    success: 0,
                    message: "old password is wrong",
                })
            }
        }
    })
});


app.post('/profile', (req, res) => {
    const data = {
        profile: req.body.profile,
    };

    conn.query('INSERT INTO signup SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                success: 1,
                message: 'Pic Send successfully',
                res: result
            });
        }
    });
});


const storages = multer.diskStorage({
    destination: ('./upload/image'),
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    }
});

const uploads = multer({ storage: storages });

app.use('/images', express.static('upload/image'));
app.post('/category', uploads.single('images'), (req, res) => {
    const data = {
        images: `http://localhost:5001/images/${req.file.filename}`,
        name: req.body.name
    };

    conn.query('INSERT INTO category SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                success: 1,
                message: 'Details Send successfully',
                res: result
            });
        }
    });
});

app.get('/category', (req, res) => {
    conn.query('SELECT * FROM category', (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                result,
                success: 1
            })
        }
    })
})

app.patch('/picture/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const imageUrl = `http://localhost:5001/image/${req.file.filename}`;
    const data = [imageUrl, id];

    conn.query('UPDATE signup SET image = ? WHERE id = ?', data, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: 0, message: 'Internal Server Error' });
        } else {
            res.json({
                success: 1,
                message: 'UserPic Was Updated',
                result: result
            });
        }
    });
});


app.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;

    conn.query('DELETE FROM signup WHERE id = ?', [userId], (error, results) => {
        if (error) throw error;
        res.json({ success: true, message: 'User deleted successfully.', results });
    });
});


app.post('/adminlogin', (req, res) => {
    email = req.body.email
    conn.query('SELECT * FROM adminlogin WHERE email = ?', email, (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        if (result && result.length > 0) {
            if (result[0].password == req.body.password) {
                res.json({
                    success: 1,
                    message: "logged in",
                    result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Password is worng",
                })
            }
        }
        else {
            res.json({
                success: 0,
                message: "Email Is not Found"
            })
        }
    })
})

app.post('/booking', (req, res) => {
    const data = {
        loginId: req.body.loginId,
        eventId: req.body.eventId
    };

    conn.query('INSERT INTO booking SET ?', data, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: 0,
                message: 'Booking failed',
                error: err
            });
        } else {
            res.json({
                success: 1,
                message: 'Booking Successfully',
                result
            });
        }
    });
});


app.get('/booking', (req, res) => {
    conn.query('SELECT * FROM booking', (err, result) => {
        // console.log(result)
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                result,
                success: 1
            })
        }
    })
})

app.get('/mybooking/:loginId', (req, res) => {
    const loginId = req.params.loginId

    conn.query('SELECT * FROM booking WHERE loginId = ?', loginId, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: 0,
                message: 'Internal Server Error',
            });
        } else {
            res.json({
                result,
                success: 1,
            });
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));