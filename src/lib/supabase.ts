// Dummy Supabase config for static build
// Will be replaced with real config when adding dynamic features

export const supabase = {
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: null, error: null }),
    signUp: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
  },
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  }),
}

// Database types
export interface Profile {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  discord_username?: string
  vr_experience_level?: string
  created_at: string
  updated_at: string
}

export interface Team {
  id: string
  name: string
  tag: string
  description?: string
  logo_url?: string
  captain_id: string
  max_members: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Tournament {
  id: string
  name: string
  description?: string
  game_mode: string
  tournament_type: string
  max_participants: number
  entry_fee: number
  prize_pool: number
  registration_start: string
  registration_end: string
  tournament_start: string
  tournament_end?: string
  status: 'upcoming' | 'registration_open' | 'in_progress' | 'completed' | 'cancelled'
  created_by: string
  created_at: string
  updated_at: string
}

export interface TournamentRegistration {
  id: string
  tournament_id: string
  team_id?: string
  user_id?: string
  registration_type: 'team' | 'individual'
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_id?: string
  registered_at: string
}

// Helper functions (dummy implementations)
export async function getCurrentUser() {
  return null
}

export async function getUserProfile(userId: string) {
  return null
}

export async function updateUserProfile(userId: string, updates: Partial<Profile>) {
  return null
}

export async function getTournaments(): Promise<Tournament[]> {
  // Return sample tournament data for static build
  return [
    {
      id: '1',
      name: 'Crown Championship - Season 1',
      description: 'The premier Lords of Esport tournament featuring the finest VR warriors in the UK',
      game_mode: 'Battle Royale',
      tournament_type: 'elimination',
      max_participants: 32,
      entry_fee: 25,
      prize_pool: 1500,
      registration_start: '2025-01-15T00:00:00Z',
      registration_end: '2025-02-01T23:59:59Z',
      tournament_start: '2025-02-05T18:00:00Z',
      tournament_end: '2025-02-05T22:00:00Z',
      status: 'registration_open',
      created_by: 'admin',
      created_at: '2025-01-01T00:00:00Z',
      updated_at: '2025-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Royal Rumble Weekly',
      description: 'Weekly battles for glory and ranking points in the Lords of Esport league',
      game_mode: 'Team Deathmatch',
      tournament_type: 'round_robin',
      max_participants: 16,
      entry_fee: 15,
      prize_pool: 800,
      registration_start: '2025-01-20T00:00:00Z',
      registration_end: '2025-01-25T23:59:59Z',
      tournament_start: '2025-01-26T19:00:00Z',
      tournament_end: '2025-01-26T21:00:00Z',
      status: 'upcoming',
      created_by: 'admin',
      created_at: '2025-01-01T00:00:00Z',
      updated_at: '2025-01-01T00:00:00Z',
    },
    {
      id: '3',
      name: 'Throne Wars - Team Battle',
      description: 'Elite team competition hosted at VRXtra Kingston facilities',
      game_mode: 'Squad Battle',
      tournament_type: 'elimination',
      max_participants: 24,
      entry_fee: 50,
      prize_pool: 2000,
      registration_start: '2025-02-01T00:00:00Z',
      registration_end: '2025-02-15T23:59:59Z',
      tournament_start: '2025-02-20T17:00:00Z',
      tournament_end: '2025-02-20T21:00:00Z',
      status: 'registration_open',
      created_by: 'admin',
      created_at: '2025-01-01T00:00:00Z',
      updated_at: '2025-01-01T00:00:00Z',
    }
  ]
}

export async function registerForTournament(tournamentId: string, registrationData: {
  team_id?: string
  user_id?: string
  registration_type: 'team' | 'individual'
}) {
  return null
}

