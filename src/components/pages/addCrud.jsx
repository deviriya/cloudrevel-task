import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../ui/button'

function AddCrud({handleAddobj, toggle}) {

    const { handleSubmit, reset, control, formState: { errors, isValid, isDirty } } = useForm({ 
        mode: "onTouched",
        defaultValues:{
            name :"",
            email:"",
            message:""
        }
     })

    const onSubmit = (data) => {
        data["id"]=parseInt(Math.random()*1000);
        handleAddobj(data)
        toggle();
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <div className='mt-3 mb-3'>
                <Controller
                    control={control}
                    rules={{
                        required: "This field is required",
                        pattern:{
                            value:/[A-Za-z0-9_]/,
                            message:"Pattern should be in alphanumeric"
                        }
                    }}
                    name='name'
                    render={({ field }) => (
                        <TextField {...field}
                            id="outlined-basic"
                            label="User Name"
                            placeholder='Enter user name'
                            fullWidth
                            InputLabelProps={{
                                shrink:true
                            }}
                            variant="outlined"
                            error={errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />
            </div>
            <div className='mt-3 mb-3'>
                <Controller
                    control={control}
                    rules={{
                        required: "This field is required",
                        pattern:{
                            value :/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                            message:"Invalid e-mail"
                        }
                    }}
                    name='email'
                    render={({ field }) => (
                        <TextField {...field}
                            id="outlined-basic"
                            label="E-mail"
                            placeholder='Enter e-mail'
                            fullWidth
                            InputLabelProps={{
                                shrink:true
                            }}
                            variant="outlined"
                            error={errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
            </div>
            <div className='mt-3 mb-3'>
                <Controller
                    control={control}
                    rules={{
                        required: "This field is required",
                        minLength:{
                            value:3,
                            message:"Require atleast 3 characters."
                        }
                    }}
                    name='message'
                    render={({ field }) => (
                        <TextField {...field}
                            id="outlined-basic"
                            label="Message"
                            placeholder='Enter message'
                            fullWidth
                            multiline
                            rows={4}
                            InputLabelProps={{
                                shrink:true
                            }}
                            variant="outlined"
                            error={errors?.message}
                            helperText={errors.message?.message}
                        />
                    )}
                />
            </div>
            <div className='flex justify-center'>
                <Button disabled={!isDirty || !isValid}>Submit</Button>
            </div>
        </form>
    )
}

export default AddCrud