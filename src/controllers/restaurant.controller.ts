import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
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
        res.render("home");
        // send | json | redirect | end | render = formats
    } catch (err) {
        console.log("ERROR, goHome:", err);
    }
};
//DEFINITION

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.render("signup");
    } catch (err) {
        console.log("ERROR, getSignup:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.render("login");
    } catch (err) {
        console.log("ERROR, getLogin:", err);
    }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        //CALL
        //Objectimiz orqali methodni (processSignup) chaqirib "newMember"ni argument sifatida PASS qilayapmiz
        //Natijani kutib const ni result ga tenglayapmiz
        const result = await memberService.processSignup(newMember);
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch (err) {
        console.log("ERROR, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin');
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input); 
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });

    } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};

export default restaurantController;