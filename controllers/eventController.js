
const Event = require('../models/Event');

exports.createEvent = async (req,res)=>{
  const event = new Event({...req.body,createdBy:req.user.id});
  await event.save();
  res.json(event);
};

exports.approveEvent = async (req,res)=>{
  const event = await Event.findById(req.params.id);
  event.approved = true;
  await event.save();
  res.json(event);
};

exports.getEvents = async (req,res)=>{
  const {location,date} = req.query;
  let filter = {approved:true};

  if(location) filter.location = location;
  if(date) filter.date = date;

  const events = await Event.find(filter);
  res.json(events);
};

exports.registerEvent = async (req,res)=>{
  const event = await Event.findById(req.params.id);

  if(event.attendees.includes(req.user.id))
    return res.status(400).send("Already registered");

  if(event.attendees.length >= event.capacity)
    return res.status(400).send("Event full");

  event.attendees.push(req.user.id);
  await event.save();
  res.json(event);
};

exports.cancelRegistration = async (req,res)=>{
  const event = await Event.findById(req.params.id);

  event.attendees = event.attendees.filter(
    u => u.toString() !== req.user.id
  );

  await event.save();
  res.json(event);
};
