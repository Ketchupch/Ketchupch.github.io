#include <iostream>
#include <time.h>
#include <vector>

bool dbfz = false;
bool bbctag = false;
bool bbctagDlc = false;
std::string bbctagDlcs;

int main() {

	//DBFZ
	std::vector<std::string> dbfzChars = { "Android 16", "Android 17", "Android 18", 
		"Android 21", "Beerus", "Captin Ginyu", "Cell", "Frieza", "Gohan (Teen)", 
		"Gohan (Adult)", "Goku (Super Saiyan)", "Goku (SSGSS)", "Goku Black", "Gotenks", 
		"Hit", "Kid Buu", "Krillin", "Majin Buu", "Nappa", "Piccolo", "Tien", 
		"Vegeta (Super Saiyan)", "Vegeta (SSGSS)", "Yamcha", "Bardock", "Broly", "Cooler", 
		"Goku Base", "Vegeta Base", "Vegito (SSGSS)", "Zamasu (Fused)", "Broly (DBS)", 
		"Gogeta (SSGSS)", "Goku (GT)", "Janemba", "Jiren", "Videl", "Goku (UI)", "Kefla", 
		"Master Roshi", "Super Baby 2" };

	//BBCTAG
	std::vector<std::string> bbctagChars = { "Ragna", "Jin", "Noel", "Rachel", "Tager",
		"Nu-13", "Hazama", "Makoto", "Azrael", "Linne", "Hyde", "Waldstein", "Gordeau", ""};

	//^Dlcs
	std::vector<std::string> bbctagCharsDlc = { "Ragna", "Jin", "Noel", "Rachel", "Tager", "Hakumen",
		"Nu-13", "Hazama", "Makoto", "Platinum", "Tsubaki (Izayoi)", "Azrael", "Celica",
		"Nine", "Naoto K.", "Terumi (Susano'o)", "Es", "Mai", "Jubei", "Akihiko", "Yuzuriha", 
		"Yu", "Yosuke", "Chie", "Yukiko", "Kanji", "Teddie", "Naoto S.", "Mitsuru", "Aegis", 
		"Elizabeth", "Labrys", "Adachi", "Hyde", "Linne", "Waldstein", "Carmine", "Orie", "Gordeau",
		"Merkava", "Vatista", "Seth", "Hilda", "Mika", "Ruby", "Weiss", "Blake", "Yang", "Neo", 
		"Heart", "Yumi", "Akatsuki", "Blitztank" };

	while (true) {


		std::string g;
		std::cout << "Choose a game.\nOptions:\nDragon Ball Fighterz (dbfz)\nBlazBlue Cross Tag Battle (bbctag)\n";

		std::cin >> g;
		if (g == "dbfz") {
			dbfz = true;
			bbctag = false;
			std::cout << "Chose: Dragon Ball FighterZ\n";
		}
		else if(g == "bbctag"){
			dbfz = false;
			bbctag = true;
			std::cout << "Chose: BlazBlue Cross Tag Battle\n";

			std::cout << "Include Dlcs?\n";

			std::cin >> bbctagDlcs;
			if (bbctagDlcs == "y") {
				bbctagDlc = true;
			}
			else {
				bbctagDlc = false;
			}
		}

RESTART:

		int p1f = NULL;
		int p1m = NULL;
		int p1l = NULL;
				  
		int p2f = NULL;
		int p2m = NULL;
		int p2l = NULL;

		srand(time(NULL));
		if (dbfz == true) {

			p1f = rand() % dbfzChars.size();
			p1m = rand() % dbfzChars.size();
			p1l = rand() % dbfzChars.size();

			p2f = rand() % dbfzChars.size();
			p2m = rand() % dbfzChars.size();
			p2l = rand() % dbfzChars.size();

		}
		else if (bbctag == true) {

			if (bbctagDlc == true) {


				p1f = rand() % bbctagCharsDlc.size();
				p1m = rand() % bbctagCharsDlc.size();
				p1l = rand() % bbctagCharsDlc.size();

				p2f = rand() % bbctagCharsDlc.size();
				p2m = rand() % bbctagCharsDlc.size();
				p2l = rand() % bbctagCharsDlc.size();

			}
			else {

				p1f = rand() % bbctagChars.size();
				p1m = rand() % bbctagChars.size();
				p1l = rand() % bbctagChars.size();

				p2f = rand() % bbctagChars.size();
				p2m = rand() % bbctagChars.size();
				p2l = rand() % bbctagChars.size();

			}
		}

		if (p1m == p1f) {
			while (p1m == p1f) {
				if (dbfz == true) {
					p1f = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) {
						p1f = rand() % bbctagChars.size();
					}
					else {
						p1f = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}
		/*else if (p1l == p1f || p1l == p1m || p1l == p1f && p1l == p1m) {
			while (p1l == p1f || p1l == p1m || p1l == p1f && p1l == p1m) {
				p1l = rand() % dbfzChars.size();
			}
		}*/
		else if (p1l == p1f) {
			while (p1l == p1f) {
				if (dbfz == true) {
					p1l = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) { 
						p1l = rand() % bbctagChars.size();
					}
					else {
						p1l = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}
		else if (p1l == p1m) {
			while (p1l == p1m) {
				if (dbfz == true) {
					p1l = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) { 
						p1l = rand() % bbctagChars.size(); 
					}
					else {
						p1l = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}

		if (p2m == p2f) {
			while (p2m == p2f) {
				if (dbfz == true) {
					p2m = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) {
						p2m = rand() % bbctagChars.size();
					}
					else {
						p2m = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}
		else if (p2l == p2f || p2l == p2m || p2l == p2f && p2l == p2m) {
			while (p2l == p2f || p2l == p2m || p2l == p2f && p2l == p2m) {
				if (dbfz == true) {
					p2l = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) { 
						p2l = rand() % bbctagChars.size(); 
					}
					else {
						p2l = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}
		else if (p2l == p2f) {
			while (p2l == p2f) {
				if (dbfz == true) {
					p2l = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if (bbctagDlc == false) {
						p2l =  rand() % bbctagChars.size(); 
					}
					else {
						p2l = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}
		else if (p2l == p2m) {
			while (p2l == p2m) {
				if (dbfz == true) {
					p2l = rand() % dbfzChars.size();
				}
				else if (bbctag == true) {
					if(bbctagDlc == false) {
						p2l = rand() % bbctagChars.size();
					}
					else {
						p2l = rand() % bbctagCharsDlc.size();
					}
				}
			}
		}

		std::string botMessage;

		if (dbfz == true) {
			botMessage = "P1 Team: " + dbfzChars[p1f] + ", " + dbfzChars[p1m] + ", " + dbfzChars[p1l] + "\nP2 Team: " + dbfzChars[p2f] + ", " + dbfzChars[p2m] + ", " + dbfzChars[p2l];

			std::cout << "P1 Team: " << dbfzChars[p1f] << ", " << dbfzChars[p1m] << ", " << dbfzChars[p1l] << std::endl;
			std::cout << "P2 Team: " << dbfzChars[p2f] << ", " << dbfzChars[p2m] << ", " << dbfzChars[p2l] << std::endl;
		}
		else if (bbctag == true) {
			if (bbctagDlc == false) {
				botMessage = "P1 Team: " + bbctagChars[p1f] + ", " + bbctagChars[p1m] + "\nP2 Team: " + bbctagChars[p2f] + ", " + bbctagChars[p2m];

				std::cout << "P1 Team: " << bbctagChars[p1f] << ", " << bbctagChars[p1m] << std::endl;
				std::cout << "P2 Team: " << bbctagChars[p2f] << ", " << bbctagChars[p2m] << std::endl;
			}
			else {
				botMessage = "P1 Team: " + bbctagCharsDlc[p1f] + ", " + bbctagCharsDlc[p1m] + "\nP2 Team: " + bbctagCharsDlc[p2f] + ", " + bbctagCharsDlc[p2m];

				std::cout << "P1 Team: " << bbctagCharsDlc[p1f] << ", " << bbctagCharsDlc[p1m] << std::endl;
				std::cout << "P2 Team: " << bbctagCharsDlc[p2f] << ", " << bbctagCharsDlc[p2m] << std::endl;
			}
		}

		std::string r;
		std::cin >> r;

		if (r == "y") {
			goto RESTART;
		}
		else if (r == "n"){
			dbfz = false;
			bbctag = false;
			continue;
		}
		else {
			return false;
		}
		
	}

	return 0;
}