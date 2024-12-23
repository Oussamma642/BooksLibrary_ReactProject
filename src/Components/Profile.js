


export default function Profile({UserInofs}){


    console.log(UserInofs.email);

    return(

        <>
            <h1 className="text-white">Hello{UserInofs.email}</h1>

        </>

    );


}


