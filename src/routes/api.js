const Trash = require("../models/Trash");

$$.get = {
  "@verifyKey /": () => Trash.find(),
};

$$.post = {
  "@verifyKey /": async ({ query }) => {
    const { sensor, state } = query;

    const trash = await Trash.findOne({ key: Number(sensor) });

    if (!trash) await Trash.insertOne({ key: sensor, state });
    else await trash.update({ $set: { state } });

    return { success: true };
  },
};
