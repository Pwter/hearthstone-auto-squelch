IfWinExist, Hearthstone
{
    SetFormat, float, 3.1

    WinActivate, Hearthstone

    WinWaitActive, Hearthstone
    {
        WinGetPos, hsx, hsy, hsw, hsh, Hearthstone
        MouseGetPos, mposx, mposy

        heroposx := hsw / 2
        heroposy := hsh / 5.5


        squelchx := heroposx - 120
        squelchy := heroposy - 60

        Click %heroposx%, %heroposy% right
	Sleep, 0.3
        Click %squelchx%, %squelchy%

        MouseMove, mposx, mposy

    }

}

Exit
