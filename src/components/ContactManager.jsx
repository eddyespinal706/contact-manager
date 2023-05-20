import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const ContactManager = () =>{

    const schema = yup.object().shape({
        fullName: yup.string().required("The name is requiered"),
        phoneNumber: yup.number().integer().required("Please type the phone number correctly, this field is required."),
        email: yup.string().email().required("Please type the email address correctly, this field is required")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const addContact = (data) =>{
        console.log(data)
    }

    return(
        <form id="contactForm" onSubmit={handleSubmit(addContact)}>
            <label htmlFor="fullName">Contact Name: </label>
            <input type="text" name="fullName" id="fullName" placeholder="Ex. John Doe" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Ex. 8093332211"{...register("phoneNumber")}/>
            <p>{errors.phoneNumber?.message}</p>
            <label htmlFor="email">Email Address: </label>
            <input type="text" name="email" id="email" placeholder="Ex. name@me.com" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="submit" value="Add Contact" />
        </form>
    )
}