import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'rearguarde',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/resources',
    }),
    endpoints: builder => ({
        getSongAndRelatedRelease: builder.query({
            async queryFn(songId, _queryApi, _extraOptions, fetchWithBaseQuery) {

                const songResult = await fetchWithBaseQuery(`/songs/${songId}`);
                if (songResult.error)
                    return { error: songResult.error };

                const song = songResult.data;
                const releaseResult = await fetchWithBaseQuery(`/releases/${song.release_id}`);

                console.log(`${song.name}`);

                return releaseResult.data
                    ?
                    {
                        data: {
                            song: song,
                            release: releaseResult.data,
                        }
                    }
                    : { error: releaseResult.error };
            },
        }),
    }),
});

export const { useGetSongAndRelatedReleaseQuery } = apiSlice;
