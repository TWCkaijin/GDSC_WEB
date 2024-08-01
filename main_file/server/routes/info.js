const router = require('express').Router();
const passport = require('passport');
const Club = require('../models/club');

router.get("/", async(req, res) => {
    try {
        const latestYearClub = await Club.findOne().sort({ year: -1 }).exec();
        if (!latestYearClub) {
            return res.status(404).json({
                ok: false,
                error: true,
                message: "No club data found",
            });
        }

        const clubs = await Club.find({ year: latestYearClub.year }); // 從資料庫中提取所有 Club 資料
        const formattedClubs = clubs.map(club => ({
            name: club.name,
            year: club.year,
            dc: club.dc,
            web_site: club.web_site,
            ig: club.ig,
            current_course: club.current_course,
            project: club.project,
            // 添加其他需要的欄位
        }));
        
        res.status(200).json({
            ok: true,
            data: formattedClubs,
        });
    } catch (error) {
        console.log("returning preview page error"+error);
        res.status(500).json({
            ok: false,
            error: true,
            message: "Failed to retrieve club data",
        });
    }
});


router.post("/setclub", async (req, res) => {
    try {
        const newClub = new Club(req.body);
        await newClub.save();
        res.status(201).json({
            ok: true,
            data: newClub,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: true,
            message: "Failed to create club data",
        });
    }
});

router.put("/setclub/:id", async (req, res) => {
    try {
        const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClub) {
            return res.status(404).json({
                ok: false,
                error: true,
                message: "Club not found",
            });
        }
        res.status(200).json({
            ok: true,
            data: updatedClub,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: true,
            message: "Failed to update club data",
        });
    }
});


module.exports = router;