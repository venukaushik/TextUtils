import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#151550',
        backgroundColor: props.mode === 'dark' ? '#151550' : 'white',
        border: '2px solid white'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const toggleBtn = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'

    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '5px solid yellow'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
        <>
            <div className='container' style={myStyle}>
                <h1 className='my-4'>About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore sunt tempore perferendis, blanditiis magni voluptatum maiores debitis, distinctio ex vel est facilis? Quia blanditiis reprehenderit mollitia minima ad quaerat deleniti, at nam, quod deserunt quisquam accusamus perferendis assumenda sint, repudiandae esse. Et, quia velit? Et accusantium ad id recusandae placeat soluta, rerum totam sequi beatae voluptatibus ut! Earum suscipit delectus nisi aut aliquid quasi inventore quae impedit omnis quia ipsum dolore beatae placeat sint, nobis dolorum eius nihil nemo repudiandae tempora tempore! Dicta a cumque consequatur doloribus soluta odio eos fugiat distinctio, minima cupiditate eius aperiam maxime quas! Earum quos repellat in at, minus iusto. Atque doloribus accusantium distinctio omnis reiciendis error ratione obcaecati labore. Possimus ducimus eaque doloribus ea eligendi harum magni inventore corporis placeat, deserunt dolorem quam eos iste minima temporibus odit consequatur sequi minus. Esse quidem beatae accusantium optio aut quisquam, quod, numquam itaque culpa aspernatur quam voluptas laborum est fugiat fugit hic aliquid ex impedit recusandae quae non libero! Accusantium sequi itaque beatae, saepe, omnis sint inventore dolore ab repudiandae officia eligendi nesciunt enim incidunt natus blanditiis dolor porro cupiditate? Nulla, iste tenetur cum voluptas possimus mollitia, accusantium repudiandae ut fugit doloribus quod similique inventore.</p>
                {/* <div className="container">
                    <button onClick={toggleBtn} className=" btn btn-info my-2" type="button">{btnText}</button>
                </div> */}
            </div>
        </>
    )
}
