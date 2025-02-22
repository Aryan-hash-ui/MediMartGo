
export default function FormValidation(event) {
    var { name, value } = event.target

    switch (name) {
        case "name":
        case "color": if (!value && value !== "")
            return name + " Must Required"
        else if (value.length < 3)
            return name + " Length cannot be less than 3 characters"
        else if (value.length > 50)
            return name + " Length cannot be More than 50 characters"
        else
            return ""
        case "size":
            if (!value && value !== "")
                return name + "Must Required"
            else if (value.length > 6)
                return name + " Length cannot be more than 6 characters"
            else return ""
        case "baseprice":
            if (!value)
                return name + " Must Required"
            else if (value < 1)
                return name + " Price must be greater than 0"
            else
                return ""
        case "discount":
            if (value < 0 || value > 100)
                return name + " Discount must be in between 0-100"
            else
                return ""
        case "profile":
            if (value.length === 0)
                return name + "Must Required"
            else if (value.length < 3)
                return name + " Length cannot be less than 3 characters"
            else if (value.length > 50)
                return name + " Length cannot be More than 50 characters"
            else
                return ""
        case "message":
            if (value.length === 0)
                return name + "Must Required"
            else if (value.length < 100)
                return name + " Length cannot be less than 100 characters"
            else
                return ""

    }

}
