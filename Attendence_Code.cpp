#include <iostream>
using namespace std;

//This Will Return The Attendence Per Subject Whenever Called
int Attendence()
{
    int Attendence = 0;
    int check = 1;
    //Enter 1 if Present. 0 -> Stop Loop
    cout << "You Were Present Or Absent Today ?" << endl;
   
    //Loop Should Run Till User Enters 0
    while(check != 0)
    {  
        cin >> check;
        Attendence++;
    }
    return Attendence;
}


int main() {
    // Code Starts
    //Let the total hours per Subject be 40hrs means 40 lectures
    //Now Let the user enter Name of Subject
    string subject_Name;
    //Subject Name For Which You Want to See The Attendence
    cout << "Enter Code of the Subject: " << endl;
    //Enter Code For Every Subject as entered below
    /* Maths  -> MATH
       Physics -> PHY
       Chemistry -> CHEM
    */
    cin >> subject_Name;
   
    int Ans = 0;
    if(subject_Name == "MATH")
    {
        Ans = 40 - Attendence();
        cout << "You Have to Attend: " << Ans << " More lectures in Mathematics" << endl;
    }
    else if(subject_Name == "PHY")
    {
        Ans = 40 - Attendence();
        cout << "You Have to Attend: " << Ans << " More lectures in PHYSICS" << endl;
    }
    else if(subject_Name == "CHEM")
    {
        Ans = 40 - Attendence() +1;
         cout << "You Have to Attend: " << Ans << " More lectures in CHEMISTRY" << endl;
    }
    else
    {
         cout << "Enter Valid Code For subject Specified Above:" << endl;
    }
   
    return 0;
}