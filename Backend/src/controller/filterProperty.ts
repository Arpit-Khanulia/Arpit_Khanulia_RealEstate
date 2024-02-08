import { Request, Response } from 'express';
import { Property } from '../model/properties';

const getPropertiesByPincodeAndType = async (req: Request, res: Response) => {
    const { pincode, type } = req.body;



    console.log('fetching searched property');
    console.log(pincode,type);
    

    try {
        const properties = await Property.find({ pincode, type });
        console.log("these are properties ",properties);
        
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('Error fetching properties');
    }
};

export { getPropertiesByPincodeAndType };
