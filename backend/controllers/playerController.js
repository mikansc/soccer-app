import mongoose from 'mongoose';
import { PlayerSchema } from '../models/Player';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, player) => {
    if (err) res.send(err);
    res.json(player);
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, player) => {
    if (err) res.send(err);
    res.json(player);
  });
};

export const getPlayerById = (req, res) => {
  Player.findById(req.params.PlayerId, (err, player) => {
    if (err) res.send(err);
    res.json(player);
  });
};

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true },
    (err, player) => {
      if (err) res.send(err);
      res.json(player);
    }
  );
};

export const deletePlayer = (req, res) => {
  Player.remove({ _id: req.params.PlayerId }, (err, player) => {
    if (err) res.send(err);
    res.json({ message: 'Successfully deleted player' });
  });
};
