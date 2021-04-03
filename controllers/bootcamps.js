const Bootcamp= require('../models/Bootcamp')


// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public

exports.getBootcamps =async(req, res, next)=> {
    const bootcamp=await Bootcamp.find()
    res.status(200).json({sucess: true, data: bootcamp})

  
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public

exports.getBootcamp =async(req, res, next)=> {
        const id = req.body.id
        const bootcamps =await Bootcamp.findOne({id});
        res.status(200).json({sucess: true, data: bootcamps})
   
   

}

// @desc      Create new  bootcamp
// @route     POST /api/v1/bootcamps
// @access    Public

exports.createBootcamp =async(req, res, next)=> {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        data: bootcamp
      });

  

}

// @desc      delete bootcamp
// @route     DELETE /api/v1/bootcamps/1
// @access    Public

exports.deleteBootcamp =async(req, res, next)=> {

    const  _id= req.params.id;
    const result = await Bootcamp.deleteOne({_id});
    res.status(200).json({sucess: true, message: `delelete the bootcamps ${_id}`})

}

// @desc      Edit bootcamp
// @route     PATCH /api/v1/bootcamps/1
// @access    Public

exports.updateBootcamp =async(req, res, next)=> {
    res.status(200).json({sucess: true, message: `edit the bootcamps ${req.params.id}`})

}