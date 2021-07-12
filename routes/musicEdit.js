const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET home page. */
router.get('/edit/:id', function(req, res, next) {
	Music.findById(req.params.id, (err, musics)=> {
		console.log(musics);
	    res.render('musicEdit', {
		    title: 'Music O`zgartirish sahifasi',
		    musics,
	    })
	})
});

router.post('/edit/:id', function(req, res, next){
	const music = {}
	music.name = req.body.name
	music.singer = req.body.singer
	music.comment = req.body.comment

	const query = {_id: req.params.id};

	Music.update(query, music, (err) => {
		if(err) console.log(err);
		res.redirect('/')
	})
})


module.exports = router;
