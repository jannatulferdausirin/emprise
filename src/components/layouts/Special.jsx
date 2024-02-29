import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Input from "../Input";
import Paragraph from "../Paragraph";
import Badge from "./Badge";
import SandyBeachCarousel from "./SandyBeachCarousel";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/travellerSlice";
import SelectionApi from "./SelectionApi";
import Overview from "./Overview";
import BestSeller from "./BestSeller";

const Special = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.irin.value);
  console.log(data);

  return (
    <Container className={` pt-5`}>
      <SandyBeachCarousel />
      <Flex className={`justify-between mt-12`}>
       <Overview/>
        {/* right side cart */}
        <div className="">
          <div className="bg-gray-50 w-[376px] rounded px-8">
            <div className="">
              <Heading
                as="h4"
                text="£2469"
                className="text-[14px] leading-[18px] text-[#FA3E2C] pt-6"
              />
              <Flex className={`items-center gap-2 py-2`}>
                <Heading
                  as="h4"
                  text="£1759"
                  className="text-[36px] leading-[48px] font-bold"
                />
                <Paragraph
                  text=" per person"
                  className="text-[14px] leading-[18px] text-[rgb(84,97,121)]"
                />
                <Badge
                  text="20% OFF"
                  className="text-[16px] leading-[20px] text-[rgb(40,176,166)]
             font-medium"
                />
              </Flex>
              <Paragraph text=" *Price based on selections bellow." />
            </div>
            {/* dates */}
            <div>
              <Heading
                as="h4"
                text="Dates"
                className="text-[16px] leading-[24px] text-[#6C757D] font-medium tracking-[0.5px] py-2"
              />
              <Input
                type="date"
                inputPlaceholder="Select preferred dates"
                className={`w-[328px] px-4 py-2`}
              />
            </div>
            <div className="">
              <Heading
                as="h4"
                text="Travelers"
                className="text-[16px] leading-[24px] text-[#6C757D] font-medium tracking-[0.5px] py-2"
              />

              <div className="relative">
                <Input
                  type="text"
                  inputPlaceholder="2 Adult, 1 Child"
                  className={` w-[328px] px-4 py-2`}
                />
                <Flex
                  className={`items-center gap-1 absolute top-2 right-7 pr-2`}
                >
                  <button onClick={() => dispatch(decrement())}>
                    <CiCircleMinus className="text-[18px]" />
                  </button>
                  {data}
                  <CiCirclePlus
                    className="text-[18px]"
                    onClick={() => dispatch(increment())}
                  />
                </Flex>
              </div>
            </div>
            <div className="">
              <Heading
                as="h4"
                text="Selections"
                className="text-[16px] leading-[24px] text-[#6C757D] font-medium tracking-[0.5px] py-2 "
              />

              <div className="relative">
                <Input
                  type="text"
                  inputPlaceholder="Flight, hotel, car etc."
                  className={`w-[328px] px-4 py-2`}
                />

                <SelectionApi />
              </div>
            </div>
            <Button
              text="Check Availability"
              className={`bg-orange-400 text-white rounded-lg px-[26px] my-6`}
            />
          </div>
          <div className="mt-12 text-[#546179]  px-8">
            <Paragraph
              text="If you have  question about this tour,
please feel free to ask"
              className={` text-[16px] leading-[24px] tracking-[0.5px] w-[350px] mx-auto`}
            />
            <Button
              text="Ask the Tour Expert"
              className={` text-gray-400 border px-[26px] text-[18px] leading-[27px] my-4 hover:text-[white]`}
            />
            <Paragraph
              text="*All questions are replied to within 24-48 hrs"
              className={`text-[14px] leading-[21px] font-medium text-[#99A3AD]`}
            />
          </div>
        </div>
      </Flex>
      <BestSeller/>
    </Container>
  );
};

export default Special;
