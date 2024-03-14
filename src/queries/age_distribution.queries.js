const getAgeDistribution = `
    WITH age_distribution AS (
        SELECT 
            SUM(CASE WHEN age < 20 THEN 1 ELSE 0 END) AS age_less_than_20,
            SUM(CASE WHEN age >= 20 AND age <= 40 THEN 1 ELSE 0 END) AS age_20_to_40,
            SUM(CASE WHEN age > 40 AND age <= 60 THEN 1 ELSE 0 END) AS age_40_to_60,
            SUM(CASE WHEN age > 60 THEN 1 ELSE 0 END) AS age_greater_than_60
        FROM public.users
    ),
    total_users AS (
        SELECT COUNT(*) AS total_users
        FROM users
    )
    SELECT 
        jsonb_build_object(
            'Age-Group', '< 20',
            '% Distribution', ROUND((age_less_than_20 * 100.0) / (SELECT total_users FROM total_users), 2)
        ) AS age_group_1,
        jsonb_build_object(
            'Age-Group', '20 to 40',
            '% Distribution', ROUND((age_20_to_40 * 100.0) / (SELECT total_users FROM total_users), 2)
        ) AS age_group_2,
        jsonb_build_object(
            'Age-Group', '40 to 60',
            '% Distribution', ROUND((age_40_to_60 * 100.0) / (SELECT total_users FROM total_users), 2)
        ) AS age_group_3,
        jsonb_build_object(
            'Age-Group', '> 60',
            '% Distribution', ROUND((age_greater_than_60 * 100.0) / (SELECT total_users FROM total_users), 2)
        ) AS age_group_4
    FROM age_distribution;
`

export default getAgeDistribution