import React from 'react'
import Lottie from 'lottie-react';
import loadingLottie from "../lotties/loading.json";
import dots from "../lotties/dots.json";

const PlaneLoading = ({ text }) => {
    return (
        <div className="flex flex-col items-center m-auto w-[30%] pt-8 pb-48" >
            <div className="w-[20vw]">
                <Lottie
                    animationData={loadingLottie}
                    height={200}
                    width={300}
                    loop
                    autoplay
                />
            </div>
            <div className="flex text-2xl w-96 flex-nowrap">{text}
                <div className="mt-1 w-8">
                    <Lottie
                        animationData={dots}
                        height={200}
                        width={300}
                        loop
                        autoplay
                    />
                </div>
            </div>
        </div>
    )
}

export default PlaneLoading