import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";

const memberService = new MemberService(); //MemberService modulidan yangi object(memberService) yasaymiz
const memberController: T = {};


memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup');
        console.log('STEP-1')

        console.log('STEP-2')
        const input: MemberInput = req.body,
        //CALL
        //Objectimiz orqali methodni (processSignup) chaqirib "newMember"ni argument sifatida PASS qilayapmiz
        //Natijani kutib const ni result ga tenglayapmiz
        result: Member = await memberService.signup(input);
        console.log('STEP-6')

        res.json({member: result}); //natijani chiqarib yuboramiz
    } catch (err) {
        console.log('STEP-7')
        console.log("ERROR, signup:", err);
        // res.json({});    
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        const input: LoginInput = req.body,
        result = await memberService.login(input); 

        res.json({member: result});
        } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};

export default memberController;