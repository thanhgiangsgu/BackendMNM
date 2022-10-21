const size = require('../models/Size')

class Size {
    index(req, res)
    {
        size.find({}, function(err, size) {
            res.json(size)
             //res.status(400).json({ error: 'ERROR'})
        })
    }

    getSize(req, res)
    {
        
        let a = req.params.id
        size.findOne({size_id:a}, function(err, sizeRelative) {
           // xu li 
                res.json(sizeRelative)
           // return check 
        })
    }

    


    async deleteSize(req, res)
    {
        await size.findOneAndDelete({size_id:req.params.id})
        try
        {
            res.status(204).json({
                status: 'Success',
                data: {},
            })
        } catch(err)
        {
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }

        
    }

    checkId(req, res)
    {
        console.log(req.params.id);
        size.findOne({size_id:req.params.id}, function(err, sizeRelative) {
          if (sizeRelative == null)
          {
            return res.json(
                {check: 'false'}
            )
          } else 
          res.json(
            {check: 'true'}
        )
        })
        
    }


    addSize(req, res)
    {
        const dataSize = new size(req.body)
        try {
            dataSize.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataSize
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }

        
    }

    async updateSize  (req,res)
    {
        const updateSiz =  await size.findOneAndUpdate(
            {size_id:req.body.size_id},req.body,{
                new : true
              }
        )
        try {
            res.status(200).json({
                status : 'Success',
                data : {
                    updateSiz
                }
              })
        } catch (error) {
            console.log(error)
        }
        console.log(req.body);
    }
}




module.exports = new Size