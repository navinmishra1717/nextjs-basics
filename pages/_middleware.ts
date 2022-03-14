import { NextFetchEvent, NextRequest } from "next/server";

export type Middleware = (request: NextRequest, event: NextFetchEvent) => Promise<Response | undefined> | Response | undefined;