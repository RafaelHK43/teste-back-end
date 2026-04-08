const { json } = require('express');
const Diario = require('../models/Diario');

exports.listDiarios = async (req, res) =>{
    const diario = await Diario.find();
    res,json(diario);
};

exports.umDiario = async (req, res) =>{
    const diario = await Diario.findById(req.params.id);
    res.json(diario);
};

exports.createDiario = async (req, res) =>{
    const diario = await Diario.create(req.boby);
    res.status(201).json(diario);
};

exports.updateDiario = async (req, res) =>{
    const diario = await Diario.findByIdAndUodata(req.params.id, req.boby);
    res.json(diario);
};

exports.deleteDiario = async (req, res) =>{
    const diario = await Diario.findByIdAndDelete(req.params.id);
    res.json({m: "Removido"})
};