import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from "framer-motion";
import './style.css'


function CoinInfo({ heading, desc }) {
    let [read, setRead] = useState(false);

    let short = desc.slice(0, 400) + " ....";

    return (
        <motion.div className='coinInfoContainer'
            initial={{ opacity: 0.6, x: -90 }}
            animate={{ opacity: 1, x: 0, }}
            transition={{
                delay: 0.3,
                duration: 1.2,
                ease: "easeInOut"
            }}
        >
            <h2>
                {heading}
                {
                    desc.length > 400 &&
                    <span onClick={() => { setRead(!read) }}>
                        {
                            read ? <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} />
                                :
                                <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />
                        }
                    </span>
                }
            </h2>
            {
                !desc.length ?
                    <p>Seems like no description found for the selected coin !!</p>
                    :
                    desc.length > 400 ?
                        <p dangerouslySetInnerHTML={{ __html: !read ? short : desc }} />
                        :
                        <p dangerouslySetInnerHTML={{ __html: desc }} />

            }

        </motion.div>
    )
}

export default CoinInfo