import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";


const memberService = new MemberService(); //MemberService modulidan yangi object(memberService) yasaymiz
const restaurantController: T = {};

//DEFINITION
restaurantController.goHome = (req: Request, res: Response) /*2-parametr*/ => {
    try {
        console.log('go home'); // console.log - controllerni "go home" methodiga kirib kelganimizni bildiradi 
        // logic
        // service model
        // ...
        res.send ("Home Page");
        // send | json | redirect | end | render = formats
    } catch (err) {
        console.log("ERROR, goHome:", err);
    }
};
//DEFINITION

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send ("Signup Page");
    } catch (err) {
        console.log("ERROR, getSignup:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send ("Login Page");
    } catch (err) {
        console.log("ERROR, getLogin:", err);
    }
};


restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup');
        console.log('STEP-1');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        console.log('STEP-2');

        //CALL
        //Objectimiz orqali methodni (processSignup) chaqirib "newMember"ni argument sifatida PASS qilayapmiz
        //Natijani kutib const ni result ga tenglayapmiz
        const result = await memberService.processSignup(newMember);
        //TODO sessions 
        console.log('STEP-6');

        res.send(result); //natijani chiqarib yuboramiz
    } catch (err) {
        console.log('STEP-7')

        console.log("ERROR, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input); 
        //TODO sessions 

        res.send(result);
    } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};

export default restaurantController;