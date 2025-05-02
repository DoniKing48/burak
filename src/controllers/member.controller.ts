import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService(); //MemberService modulidan yangi object(memberService) yasaymiz
const authService = new AuthService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup');

        const input: MemberInput = req.body,
        //CALL
        result: Member = await memberService.signup(input);
        const token = await authService.createToken(result);
        console.log("token:", token);
        
        res.json({member: result});
    } catch (err) {
        console.log("ERROR, signup:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        const input: LoginInput = req.body,
        result = await memberService.login(input),
        token = await authService.createToken(result);
        console.log("token=>", token);

        res.json({member: result});
        } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};

export default memberController;