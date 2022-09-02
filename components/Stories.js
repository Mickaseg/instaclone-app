import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      phone: faker.phone.imei(),
      email: faker.internet.email(),
      website: faker.internet.domainName(),
      avatar: faker.internet.avatar(),
      company: faker.company.name(),
      birthdate: faker.date.birthdate(),
      address: {
        street: faker.address.streetAddress(),
        state: faker.address.state(),
        country: faker.address.country(),
        city: faker.address.city(),
      },
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
