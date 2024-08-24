"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";

interface Team {
  team_name: string;
  logo_url: string;
}

const TeamForm: React.FC = () => {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [teamName, setTeamName] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`fave_team, fave_team_logo`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setTeamName(data.fave_team);
        setLogo(data.fave_team_logo);

        const mydata: Team = {
          team_name: data.fave_team,
          logo_url: data.fave_team_logo,
        };

        setSelectedTeam(mydata);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    const fetchTeamsAndProfile = async () => {
      await getProfile();

      const response = await fetch("/team_data/data.json");
      const data: Team[] = await response.json();
      setTeams(data);
    };

    fetchTeamsAndProfile();
  }, [getProfile]);

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedTeam) {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        const { error } = await supabase.from("profiles").upsert({
          id: user?.id as string,
          fave_team: selectedTeam.team_name,
          fave_team_logo: selectedTeam.logo_url,
        });

        if (error) throw error;
        alert("Profile updated!");
      } catch (error) {
        alert("Error updating the data!");
      }
    } else {
      console.log("No team selected");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-cyan-600">
        Select Your Favorite Team
      </h2>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">
          Choose your favorite team
        </label>
        <div className="relative text-black">
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white flex items-center justify-between"
          >
            {selectedTeam ? (
              <>
                <Image
                  src={selectedTeam.logo_url}
                  alt={selectedTeam.team_name}
                  width={20}
                  height={20}
                  className="inline-block w-6 h-6 mr-2"
                />
                {selectedTeam.team_name}
              </>
            ) : (
              "Select a team"
            )}
            <span className="ml-2">&#9662;</span> {/* Arrow down icon */}
          </button>

          {dropdownOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {teams.map((team) => (
                <li
                  key={team.team_name}
                  onClick={() => handleTeamSelect(team)}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
                >
                  <Image
                    src={team.logo_url}
                    alt={team.team_name}
                    width={20}
                    height={20}
                    className="inline-block w-6 h-6 mr-2"
                  />
                  {team.team_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Display the selected team */}
      {selectedTeam && (
        <div className="mb-4 flex items-center">
          <Image
            src={selectedTeam.logo_url}
            alt={selectedTeam.team_name}
            width={20}
            height={20}
            className="w-10 h-10 mr-4"
          />
          <span className="text-lg font-medium text-black">
            {selectedTeam.team_name}
          </span>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

export default TeamForm;
