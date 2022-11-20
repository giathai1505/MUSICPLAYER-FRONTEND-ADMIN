import { Field } from "formik";
import styled from "styled-components";
import tw from "twin.macro";

export const Input = styled(Field)`
  ${tw`rounded-full outline-none text-white border-white px-3 py-2  border border-solid`}
`;

export const InputAdminForm = styled(Field)`
  ${tw`rounded-lg outline-black text-black px-3 py-2  border border-solid `}
`;
