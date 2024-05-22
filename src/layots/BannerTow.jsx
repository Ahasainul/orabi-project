import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import lamp from "../assets/imgone.png";
import imgtow from "../assets/imgtow.png";
import imgthree from "../assets/imgthree.png";
import { Link } from "react-router-dom";

const BannerTow = () => {
  return (
    <>
      <Container className="py-28">
        <Flex className="gap-5">
          <div className="w-1/2">
            <Link>
              <Image className="w-full" src={lamp} alt="imgone" />
            </Link>
          </div>

          <div className="w-1/2 ">
            <Flex className="flex-wrap  gap-11">
              <Link>
                <Image className="w-full" src={imgtow} alt="imgone" />
              </Link>
              <Link>
                <Image className="w-full" src={imgthree} alt="imgone" />
              </Link>
            </Flex>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default BannerTow;
