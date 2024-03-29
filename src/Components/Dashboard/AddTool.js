import React from 'react';
import { toast } from 'react-toastify';

const AddTool = () => {
    const handleSubmit = event => {
        event.preventDefault();
        // getting values from field 
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const desc = event.target.desc.value;
        const minimum = event.target.minimum.value;
        const available = event.target.available.value;
        const price = event.target.price.value;
        const newTool = { name, picture, desc, minimum, available, price };
        // console.log(newTool);

        // adding to server 
        const url = 'https://power-tools-server-cl9m.onrender.com/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast('Tool added');
            })
    }
    return (
        <div className='md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4 rounded-lg text-neutral'>
            <div className='card-body'>
                <h3 className="font-bold text-3xl">Add A New Tool</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label className="label">
                        <span className="label-text">Tool Name</span>
                    </label>
                    <input type="text" name='name' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='desc' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="num" name='minimum' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="num" name='available' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Price Per Product</span>
                    </label>
                    <input type="num" name='price' className="input input-bordered w-full mb-[15px]" />
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='picture' className="input input-bordered w-full mb-[15px]" />

                    <input type="submit" value="add tool" className="btn w-full max-w-xs mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default AddTool;